# `moph_vaccine_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_vaccine_history_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| vaccine_dose_no | int(11) | YES |  | NULL |  |  |
| vaccine_datetime | datetime | YES |  | NULL |  |  |
| vaccine_name | varchar(200) | YES |  | NULL |  |  |
| vaccine_manufacturer_id | int(11) | YES |  | NULL |  |  |
| vaccine_lot_number | varchar(50) | YES |  | NULL |  |  |
| hospital_code | varchar(9) | YES |  | NULL |  |  |
| hospital_name | varchar(200) | YES |  | NULL |  |  |
| visit_guid | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| PRIMARY | moph_vaccine_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "moph_vaccine_history_id": 1,
    "cid": "1xxxxxxxxxxxx",
    "vaccine_dose_no": 1,
    "vaccine_datetime": "2021-04-09 09:13:11",
    "vaccine_name": "CoronaVac",
    "vaccine_manufacturer_id": 7,
    "vaccine_lot_number": "J202103001",
    "hospital_code": "12252",
    "hospital_name": "สถาบันราชประชาสมาสัย",
    "visit_guid": "{12252-6422808-5300190012445-612978-252945-}"
  },
  {
    "moph_vaccine_history_id": 10,
    "cid": "1xxxxxxxxxxxx",
    "vaccine_dose_no": 4,
    "vaccine_datetime": "2021-12-27 09:15:00",
    "vaccine_name": "วัคซีน Covid-19 (Pfizer) เข็มที่ 4 [Pfizer, BioNTech]",
    "vaccine_manufacturer_id": 6,
    "vaccine_lot_number": "1H057A",
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "visit_guid": "{1BD6CB7B-61C0-42CC-B021-13429A2A1E17}"
  },
  {
    "moph_vaccine_history_id": 8,
    "cid": "1xxxxxxxxxxxx",
    "vaccine_dose_no": 2,
    "vaccine_datetime": "2021-04-29 10:37:59",
    "vaccine_name": "CoronaVac",
    "vaccine_manufacturer_id": 7,
    "vaccine_lot_number": "J202103005",
    "hospital_code": "12252",
    "hospital_name": "สถาบันราชประชาสมาสัย",
    "visit_guid": "{12252-6422808-5300190012445-612978-258763-}"
  },
  {
    "moph_vaccine_history_id": 9,
    "cid": "1xxxxxxxxxxxx",
    "vaccine_dose_no": 3,
    "vaccine_datetime": "2021-07-15 10:56:00",
    "vaccine_name": "วัคซีน Covid-19 (AstraZeneca) เข็มที่ 3 [AstraZeneca]",
    "vaccine_manufacturer_id": 1,
    "vaccine_lot_number": "A1010",
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "visit_guid": "{725E223A-64CD-4427-ADB4-E4BBF8F99960}"
  }
]
```
