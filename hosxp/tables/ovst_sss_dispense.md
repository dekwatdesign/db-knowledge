# `ovst_sss_dispense`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(50) | NO | PRI |  |  |  |
| provider_id | varchar(5) | YES |  | NULL |  |  |
| dispense_id | varchar(25) | YES |  | NULL |  |  |
| invno | varchar(25) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| prescription_date | datetime | YES |  | NULL |  |  |
| dispensed_date | datetime | YES |  | NULL |  |  |
| prescriber | varchar(20) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| charge_amount | double(15,3) | YES |  | NULL |  |  |
| claim_amount | double(15,3) | YES |  | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| other_amount | double(15,3) | YES |  | NULL |  |  |
| reimburser | varchar(15) | YES |  | NULL |  |  |
| benefit_plan | varchar(2) | YES |  | NULL |  |  |
| dispense_status | char(1) | YES |  | NULL |  |  |
| service_id | varchar(25) | YES |  | NULL |  |  |
| day_cover | varchar(10) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "650505134400:355068",
    "provider_id": "12251",
    "dispense_id": "000919499_355068",
    "invno": "355068",
    "hn": "650005099",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-05 13:44:00",
    "dispensed_date": "2022-05-05 14:44:28",
    "prescriber": "ว57889",
    "item_count": 4,
    "charge_amount": 86.0,
    "claim_amount": 85.5,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650505134400",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:58:51"
  },
  {
    "vn": "650505100722:355069",
    "provider_id": "12251",
    "dispense_id": "000919467_355069",
    "invno": "355069",
    "hn": "650005096",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-05 10:07:22",
    "dispensed_date": "2022-05-05 10:39:08",
    "prescriber": "ว57889",
    "item_count": 2,
    "charge_amount": 30.0,
    "claim_amount": 30.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650505100722",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:58:50"
  },
  {
    "vn": "650506085347:355084",
    "provider_id": "12251",
    "dispense_id": "000919933_355084",
    "invno": "355084",
    "hn": "530076239",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-06 08:53:47",
    "dispensed_date": "2022-05-06 09:27:56",
    "prescriber": "ว57889",
    "item_count": 3,
    "charge_amount": 2664.0,
    "claim_amount": 2663.5,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650506085347",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:58:52"
  },
  {
    "vn": "650506085529:355083",
    "provider_id": "12251",
    "dispense_id": "000919934_355083",
    "invno": "355083",
    "hn": "530093847",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-06 08:55:29",
    "dispensed_date": "2022-05-06 09:30:16",
    "prescriber": "ว57889",
    "item_count": 3,
    "charge_amount": 735.0,
    "claim_amount": 735.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650506085529",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:58:52"
  },
  {
    "vn": "650524103004:356546",
    "provider_id": "12251",
    "dispense_id": "000923344_356546",
    "invno": "356546",
    "hn": "530159451",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-24 10:30:04",
    "dispensed_date": "2022-05-24 11:04:33",
    "prescriber": "ว23215",
    "item_count": 3,
    "charge_amount": 383.0,
    "claim_amount": 382.5,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650524103004",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:59:01"
  },
  {
    "vn": "650526142024:356867",
    "provider_id": "12251",
    "dispense_id": "000924128_356867",
    "invno": "356867",
    "hn": "530168446",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-26 14:20:24",
    "dispensed_date": "2022-05-26 14:37:01",
    "prescriber": "ว23215",
    "item_count": 3,
    "charge_amount": 51.0,
    "claim_amount": 50.5,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650526142024",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:59:02"
  },
  {
    "vn": "650527073414:356955",
    "provider_id": "12251",
    "dispense_id": "000924362_356955",
    "invno": "356955",
    "hn": "530093847",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-27 07:34:14",
    "dispensed_date": "2022-05-27 08:31:24",
    "prescriber": "ว57981",
    "item_count": 3,
    "charge_amount": 2352.0,
    "claim_amount": 2352.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650527073414",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:59:03"
  },
  {
    "vn": "650530082931:357165",
    "provider_id": "12251",
    "dispense_id": "000924654_357165",
    "invno": "357165",
    "hn": "650005291",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2022-05-30 08:29:31",
    "dispensed_date": "2022-05-30 13:01:40",
    "prescriber": "ว57981",
    "item_count": 4,
    "charge_amount": 71.0,
    "claim_amount": 70.5,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "SS",
    "dispense_status": "1",
    "service_id": "650530082931",
    "day_cover": null,
    "update_datetime": "2022-06-23 10:59:03"
  }
]
```
