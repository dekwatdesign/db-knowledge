# `risk_screen_age`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_age_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_age_name | varchar(50) | YES |  | NULL |  |  |
| risk_screen_age_year_begin | int(11) | YES |  | NULL |  |  |
| risk_screen_age_year_end | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_screen_age_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "risk_screen_age_id": 1,
    "risk_screen_age_name": "ช่วงอายุระหว่าง 15 - 30 ปี",
    "risk_screen_age_year_begin": 15,
    "risk_screen_age_year_end": 30,
    "hos_guid": null
  },
  {
    "risk_screen_age_id": 2,
    "risk_screen_age_name": "ช่วงอายุระหว่าง 31 - 50 ปี",
    "risk_screen_age_year_begin": 31,
    "risk_screen_age_year_end": 50,
    "hos_guid": null
  },
  {
    "risk_screen_age_id": 3,
    "risk_screen_age_name": "ช่วงอายุระหว่าง 51 - 70 ปี",
    "risk_screen_age_year_begin": 51,
    "risk_screen_age_year_end": 70,
    "hos_guid": null
  },
  {
    "risk_screen_age_id": 4,
    "risk_screen_age_name": "ตั้งแต่อายุ 71 ปีขึ้นไป",
    "risk_screen_age_year_begin": 71,
    "risk_screen_age_year_end": null,
    "hos_guid": null
  }
]
```
