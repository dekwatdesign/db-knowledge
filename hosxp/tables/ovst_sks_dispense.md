# `ovst_sks_dispense`

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
| use_oldcode | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| service_id | varchar(25) | YES |  | NULL |  |  |
| day_cover | varchar(10) | YES |  | NULL |  |  |

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
    "vn": "630303094014:295729",
    "provider_id": "12251",
    "dispense_id": "000783097",
    "invno": "295729",
    "hn": "530058554",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 09:40:14",
    "dispensed_date": "2020-03-03 10:06:37",
    "prescriber": "ว20336",
    "item_count": 2,
    "charge_amount": 6467.0,
    "claim_amount": 6467.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:43",
    "service_id": "630303094014",
    "day_cover": null
  },
  {
    "vn": "630303095848:295812",
    "provider_id": "12251",
    "dispense_id": "000783104",
    "invno": "295812",
    "hn": "530175548",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 09:58:48",
    "dispensed_date": "2020-03-03 10:28:07",
    "prescriber": "ว7957",
    "item_count": 5,
    "charge_amount": 290.0,
    "claim_amount": 290.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:43",
    "service_id": "630303095848",
    "day_cover": null
  },
  {
    "vn": "630303101617:295760",
    "provider_id": "12251",
    "dispense_id": "000783107",
    "invno": "295760",
    "hn": "530251842",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 10:16:17",
    "dispensed_date": "2020-03-03 10:29:27",
    "prescriber": "ว7957",
    "item_count": 1,
    "charge_amount": 90.0,
    "claim_amount": 90.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:44",
    "service_id": "630303101617",
    "day_cover": null
  },
  {
    "vn": "630303101705:295883",
    "provider_id": "12251",
    "dispense_id": "000783108",
    "invno": "295883",
    "hn": "530003842",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 10:17:05",
    "dispensed_date": "2020-03-03 10:37:11",
    "prescriber": "ว7957",
    "item_count": 5,
    "charge_amount": 679.0,
    "claim_amount": 679.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:45",
    "service_id": "630303101705",
    "day_cover": null
  },
  {
    "vn": "630303104922:295757",
    "provider_id": "12251",
    "dispense_id": "000783114",
    "invno": "295757",
    "hn": "610001157",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 10:49:22",
    "dispensed_date": "2020-03-03 12:17:10",
    "prescriber": "ว20336",
    "item_count": 2,
    "charge_amount": 7560.0,
    "claim_amount": 7560.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:46",
    "service_id": "630303104922",
    "day_cover": null
  },
  {
    "vn": "630303105057:295753",
    "provider_id": "12251",
    "dispense_id": "000783115",
    "invno": "295753",
    "hn": "530070643",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 10:50:57",
    "dispensed_date": "2020-03-03 11:00:45",
    "prescriber": "ว7957",
    "item_count": 5,
    "charge_amount": 1143.0,
    "claim_amount": 1143.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:46",
    "service_id": "630303105057",
    "day_cover": null
  },
  {
    "vn": "630303133022:295823",
    "provider_id": "12251",
    "dispense_id": "000783062",
    "invno": "295823",
    "hn": "530156353",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 13:30:22",
    "dispensed_date": "2020-03-03 13:51:38",
    "prescriber": "ว26608",
    "item_count": 3,
    "charge_amount": 19575.0,
    "claim_amount": 19575.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:48",
    "service_id": "630303133022",
    "day_cover": null
  },
  {
    "vn": "630303150856:295861",
    "provider_id": "12251",
    "dispense_id": "000783402",
    "invno": "295861",
    "hn": "530205751",
    "pid": "1xxxxxxxxxxxx",
    "prescription_date": "2020-03-03 15:08:56",
    "dispensed_date": "2020-03-03 15:29:33",
    "prescriber": "ว20336",
    "item_count": 1,
    "charge_amount": 6300.0,
    "claim_amount": 6300.0,
    "paid_amount": 0.0,
    "other_amount": 0.0,
    "reimburser": "HP",
    "benefit_plan": "CS",
    "dispense_status": "1",
    "use_oldcode": "N",
    "update_datetime": "2021-07-21 11:36:49",
    "service_id": "630303150856",
    "day_cover": null
  }
]
```
