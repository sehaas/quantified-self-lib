import {Event} from '../../../event';
import {Activity} from '../../../../activities/activity';
import {Lap} from '../../../../laps/lap';
import {Point} from '../../../../points/point';
import {DataAltitude} from '../../../../data/data.altitude';
import {DataCadence} from '../../../../data/data.cadence';
import {DataHeartRate} from '../../../../data/data.heart-rate';
import {DataSpeed} from '../../../../data/data.speed';
import {EventInterface} from '../../../event.interface';
import {DataLatitudeDegrees} from '../../../../data/data.latitude-degrees';
import {DataLongitudeDegrees} from '../../../../data/data.longitude-degrees';
import {DataTemperature} from '../../../../data/data.temperature';
import {Creator} from '../../../../creators/creator';
import {CreatorInterface} from '../../../../creators/creatorInterface';
import {ActivityTypes} from '../../../../activities/activity.types';
import {DataDuration} from '../../../../data/data.duration';
import {DataEnergy} from '../../../../data/data.energy';
import {ActivityInterface} from '../../../../activities/activity.interface';
import {LapInterface} from '../../../../laps/lap.interface';
import {DataDistance} from '../../../../data/data.distance';
import {PointInterface} from '../../../../points/point.interface';
import {DataVerticalSpeed} from '../../../../data/data.vertical-speed';
import {ImporterFitGarminDeviceNames} from './importer.fit.garmin.device.names';
import {ImporterFitSuuntoDeviceNames} from './importer.fit.suunto.device.names';
import {ImporterZwiftDeviceNames} from './importer.fit.swift.device.names';
import {DataPause} from '../../../../data/data.pause';
import {DataInterface} from '../../../../data/data.interface';
import {convertSpeedToPace, EventUtilities, isNumberOrString} from '../../../utilities/event.utilities';
import {DataCadenceAvg} from '../../../../data/data.cadence-avg';
import {DataPowerAvg} from '../../../../data/data.power-avg';
import {DataSpeedAvg} from '../../../../data/data.speed-avg';
import {DataCadenceMax} from '../../../../data/data.cadence-max';
import {DataPowerMax} from '../../../../data/data.power-max';
import {DataAscent} from '../../../../data/data.ascent';
import {DataDescent} from '../../../../data/data.descent';
import {DataHeartRateAvg} from '../../../../data/data.heart-rate-avg';
import {DataHeartRateMax} from '../../../../data/data.heart-rate-max';
import {DataSpeedMax} from '../../../../data/data.speed-max';
import {DataPower} from '../../../../data/data.power';
import {LapTypes} from '../../../../laps/lap.types';
import {DataPace} from '../../../../data/data.pace';
import {DataPaceAvg} from '../../../../data/data.pace-avg';
import {DataPaceMax} from '../../../../data/data.pace-max';
import {DataHeartRateMin} from '../../../../data/data.heart-rate-min';
import {DataPowerMin} from '../../../../data/data.power-min';
import {DataPaceMin} from '../../../../data/data.pace-min';
import {DataFormPower} from '../../../../data/data.form-power';
import {DataLegStiffness} from '../../../../data/data.leg-stiffness';
import {DataVerticalOscillation} from '../../../../data/data.vertical-oscillation';
import {DataTotalTrainingEffect} from '../../../../data/data.total-training-effect';

const FitFileParser = require('fit-file-parser').default;

export class EventImporterFIT {

  static getFromArrayBuffer(arrayBuffer: ArrayBuffer, name = 'New Event'): Promise<EventInterface> {
    return new Promise((resolve, reject) => {
      const fitFileParser = new FitFileParser({
        force: false,
        speedUnit: 'm/s',
        lengthUnit: 'm',
        temperatureUnit: 'celsius',
        elapsedRecordField: false,
        mode: 'both',
      });

      fitFileParser.parse(arrayBuffer, (error: any, fitDataObject: any) => {
        // Iterate over the sessions and create their activities
        const activities: ActivityInterface[] = fitDataObject.activity.sessions.map((sessionObject: any) => {
          // Get the activity from the sessionObject
          const activity = this.getActivityFromSessionObject(sessionObject, fitDataObject);
          // Go over the laps
          sessionObject.laps.forEach((sessionLapObject: any) => {
            // Get and add the lap to the activity
            const lap = this.getLapFromSessionLapObject(sessionLapObject);
            // Go over the records and add the points to the activity
            sessionLapObject.records.forEach((sessionLapObjectRecord: any) => {
              const point = this.getPointFromSessionLapObjectRecord(sessionLapObjectRecord);
              activity.addPoint(point);
            });
            // Add the lap to the activity
            activity.addLap(lap);
          });
          // If we had no laps then just add the records
          if (!activity.getLaps().length){
            fitDataObject.records.forEach((sessionLapObjectRecord: any) => {
              const point = this.getPointFromSessionLapObjectRecord(sessionLapObjectRecord);
              activity.addPoint(point);
            });
          }
          activity.sortPointsByDate();
          return activity;
        });
        // Create an event
        // @todo check if the start and end date can derive from the file
        const event = new Event(name, activities[0].startDate, activities[activities.length - 1].endDate);
        activities.forEach(activity => event.addActivity(activity));
        // Set the totals for the event
        event.setDuration(new DataDuration(event.getActivities().reduce((duration, activity) => activity.getDuration().getValue(), 0)));
        event.setDistance(new DataDistance(event.getActivities().reduce((duration, activity) => activity.getDistance() ? activity.getDistance().getValue() : 0, 0)));
        event.setPause(new DataPause(event.getActivities().reduce((duration, activity) => activity.getPause().getValue(), 0)));
        EventUtilities.generateStats(event);
        resolve(event);
      });

    });
  }

  private static getPointFromSessionLapObjectRecord(sessionLapObjectRecord: any): PointInterface {
    const point = new Point(sessionLapObjectRecord.timestamp);
    // Add Lat
    if (isNumberOrString(sessionLapObjectRecord.position_lat)) {
      point.addData(new DataLatitudeDegrees(sessionLapObjectRecord.position_lat));
    }
    // Add long
    if (isNumberOrString(sessionLapObjectRecord.position_long)) {
      point.addData(new DataLongitudeDegrees(sessionLapObjectRecord.position_long));
    }
    // Add Distance
    if (isNumberOrString(sessionLapObjectRecord.distance)) {
      point.addData(new DataDistance(sessionLapObjectRecord.distance));
    }
    // Add HR
    if (isNumberOrString(sessionLapObjectRecord.heart_rate)) {
      point.addData(new DataHeartRate(sessionLapObjectRecord.heart_rate));
    }
    // Add Altitude
    if (isNumberOrString(sessionLapObjectRecord.altitude)) {
      point.addData(new DataAltitude(sessionLapObjectRecord.altitude));
    }
    // Add Cadence
    if (isNumberOrString(sessionLapObjectRecord.cadence)) {
      let cadenceValue = sessionLapObjectRecord.cadence;
      // Add the fractional cadence if it's there
      if (isNumberOrString(sessionLapObjectRecord.fractional_cadence)) {
        cadenceValue += sessionLapObjectRecord.fractional_cadence;
      }
      point.addData(new DataCadence(cadenceValue));
    }
    // Add Speed
    if (isNumberOrString(sessionLapObjectRecord.speed)) {
      point.addData(new DataSpeed(sessionLapObjectRecord.speed));
      point.addData(new DataPace(convertSpeedToPace(sessionLapObjectRecord.speed)));
    }
    // Add Vertical Speed
    if (isNumberOrString(sessionLapObjectRecord.vertical_speed)) {
      point.addData(new DataVerticalSpeed(sessionLapObjectRecord.vertical_speed));
    }
    // Add Power
    if (isNumberOrString(sessionLapObjectRecord.power)) {
      point.addData(new DataPower(sessionLapObjectRecord.power));
    }
    // Add Temperature
    if (isNumberOrString(sessionLapObjectRecord.temperature)) {
      point.addData(new DataTemperature(sessionLapObjectRecord.temperature));
    }
    // Add Form Power
    if (isNumberOrString(sessionLapObjectRecord['Form Power'])) {
      point.addData(new DataFormPower(sessionLapObjectRecord['Form Power']));
    }
    // Add Leg Stiffness
    if (isNumberOrString(sessionLapObjectRecord['Leg Spring Stiffness'])) {
      point.addData(new DataLegStiffness(sessionLapObjectRecord['Leg Spring Stiffness']));
    }
    // Add Vertical  Oscillation
    if (isNumberOrString(sessionLapObjectRecord.vertical_oscillation)) {
      point.addData(new DataVerticalOscillation(sessionLapObjectRecord.vertical_oscillation));
    }
    return point;
  }

  private static getLapFromSessionLapObject(sessionLapObject: any): LapInterface {
    const lap = new Lap(
      sessionLapObject.start_time,
      sessionLapObject.timestamp || new Date(sessionLapObject.start_time.getTime() + sessionLapObject.total_elapsed_time * 1000), // Some dont have a timestamp
      LapTypes[<keyof typeof LapTypes>sessionLapObject.lap_trigger],
    );
    // Set the calories
    if (sessionLapObject.total_calories) {
      lap.addStat(new DataEnergy(sessionLapObject.total_calories));
    }
    // Add stats to the lap
    this.getStatsFromObject(sessionLapObject).forEach(stat => lap.addStat(stat));
    return lap;
  }

  private static getActivityFromSessionObject(sessionObject: any, fitDataObject: any): ActivityInterface {
    // Create an activity
    const activity = new Activity(sessionObject.start_time,
      sessionObject.timestamp || new Date(sessionObject.start_time.getTime() + sessionObject.total_elapsed_time * 1000),
      this.getActivityTypeFromSessionObject(sessionObject),
      this.getCreatorFromFitDataObject(fitDataObject),
    );
    // Set the activity stats
    this.getStatsFromObject(sessionObject).forEach(stat => activity.addStat(stat));
    return activity;
  }

  private static getActivityTypeFromSessionObject(session: any): ActivityTypes {
    if (session.sub_sport !== 'generic') {
      return ActivityTypes[<keyof typeof ActivityTypes>session.sub_sport] || ActivityTypes[<any>session.sport] || ActivityTypes.unknown;
    }
    return ActivityTypes[<keyof typeof ActivityTypes>session.sport] || ActivityTypes.unknown;
  }

  private static getStatsFromObject(object: any): DataInterface[] {
    const stats = [];
    // Set the duration which is the moving time
    const totalTimerTime = object.total_timer_time ? object.total_timer_time : (object.timestamp - object.start_time)/1000;
    stats.push(new DataDuration(totalTimerTime));
    // Set the pause which is elapsed time - moving time (timer_time)
    // There is although an exception for Zwift devices that have these fields vise versa
    const pause = (object.total_elapsed_time > totalTimerTime ?
      object.total_elapsed_time - totalTimerTime :
      totalTimerTime - object.total_elapsed_time ) || 0;
    stats.push(new DataPause(pause));
    // Set the distance @todo check on other importers for this logic
    if (isNumberOrString(object.total_distance)) {
      stats.push(new DataDistance(object.total_distance));
    } else {
      stats.push(new DataDistance(0));
    }
    if (isNumberOrString(object.avg_heart_rate)) {
      stats.push(new DataHeartRateAvg(object.avg_heart_rate));
    }
    if (isNumberOrString(object.min_heart_rate)) {
      stats.push(new DataHeartRateMin(object.min_heart_rate));
    }
    if (isNumberOrString(object.max_heart_rate)) {
      stats.push(new DataHeartRateMax(object.max_heart_rate));
    }
    if (isNumberOrString(object.avg_cadence)) {
      stats.push(new DataCadenceAvg(object.avg_cadence));
    }
    if (isNumberOrString(object.min_cadence)) {
      stats.push(new DataCadenceAvg(object.avg_cadence));
    }
    if (isNumberOrString(object.max_cadence)) {
      stats.push(new DataCadenceMax(object.max_cadence));
    }
    if (isNumberOrString(object.avg_power)) {
      stats.push(new DataPowerAvg(object.avg_power));
    }
    if (isNumberOrString(object.min_power)) {
      stats.push(new DataPowerMin(object.min_power));
    }
    if (isNumberOrString(object.max_power)) {
      stats.push(new DataPowerMax(object.max_power));
    }
    if (isNumberOrString(object.avg_speed)) {
      stats.push(new DataSpeedAvg(object.avg_speed));
      stats.push(new DataPaceAvg(convertSpeedToPace(object.avg_speed)));
    }
    if (isNumberOrString(object.min_speed)) {
      stats.push(new DataSpeedAvg(object.min_speed));
      stats.push(new DataPaceMin(convertSpeedToPace(object.min_speed)));
    }
    if (isNumberOrString(object.max_speed)) {
      stats.push(new DataSpeedMax(object.max_speed));
      stats.push(new DataPaceMax(convertSpeedToPace(object.max_speed)));
    }
    if (isNumberOrString(object.total_ascent)) {
      stats.push(new DataAscent(object.total_ascent));
    }
    if (isNumberOrString(object.total_descent)) {
      stats.push(new DataDescent(object.total_descent));
    }
    if (isNumberOrString(object.total_calories)) {
      stats.push(new DataEnergy(object.total_calories));
    }
    if (isNumberOrString(object.total_training_effect)) {
      stats.push(new DataTotalTrainingEffect(object.total_training_effect));
    }
    return stats;
  }

  private static getCreatorFromFitDataObject(fitDataObject: any): CreatorInterface {
    let creator: CreatorInterface;
    switch (fitDataObject.file_id.manufacturer) {
      case 'suunto': {
        creator = new Creator(ImporterFitSuuntoDeviceNames[<number>fitDataObject.file_id.product]);
        break;
      }
      case 'garmin': {
        creator = new Creator(ImporterFitGarminDeviceNames[fitDataObject.file_id.product]);
        break;
      }
      case 'zwift': {
        creator = new Creator(ImporterZwiftDeviceNames[fitDataObject.file_id.product]);
        break;
      }
      default: {
        creator = new Creator(
          (fitDataObject.file_id.manufacturer || 'Invalid Manufacturer')
           + (fitDataObject.file_id.product || ''),
        )
      }
    }

    if (fitDataObject.file_creator && isNumberOrString(fitDataObject.file_creator.hardware_version)) {
      creator.hwInfo = String(fitDataObject.file_creator.hardware_version);
    }
    if (fitDataObject.file_creator && isNumberOrString(fitDataObject.file_creator.software_version)) {
      creator.swInfo = String(fitDataObject.file_creator.software_version);
    } else if (fitDataObject.device_info && isNumberOrString(fitDataObject.device_info.software_version)) {
      creator.swInfo = String(fitDataObject.device_info.software_version)
    }
    if (fitDataObject.file_id && isNumberOrString(fitDataObject.file_id.serial_number)) {
      creator.serialNumber = fitDataObject.file_id.serial_number;
    } else if (fitDataObject.device_info && isNumberOrString(fitDataObject.device_info.serial_number)) {
      creator.serialNumber = fitDataObject.device_info.serial_number;
    }
    return creator;
  }
}
