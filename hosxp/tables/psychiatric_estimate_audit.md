# `psychiatric_estimate_audit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_audit_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_drinking_frequent | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_alcohol_drinking | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_beer_drinking | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_spirit_drinking | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_overs_six_standard | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_cant_stopdrink_peryear | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_alway_drink | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_alway_drink_morning | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_feel_bad_drink | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_drink_forget | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_accident_drink | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_person_care | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_point | int(11) | YES |  | NULL |  |  |
| loginname | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_date | datetime | YES |  | NULL |  |  |
| psychiatric_estimate_audit_type | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_audit_staff | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_audit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psychiatric_estimate_audit_id": 0,
    "vn": null,
    "an": null,
    "psychiatric_estimate_audit_drinking_frequent": 0,
    "psychiatric_estimate_audit_alcohol_drinking": 0,
    "psychiatric_estimate_audit_beer_drinking": null,
    "psychiatric_estimate_audit_spirit_drinking": 0,
    "psychiatric_estimate_audit_overs_six_standard": 0,
    "psychiatric_estimate_audit_cant_stopdrink_peryear": 0,
    "psychiatric_estimate_audit_alway_drink": 0,
    "psychiatric_estimate_audit_alway_drink_morning": 0,
    "psychiatric_estimate_audit_feel_bad_drink": 0,
    "psychiatric_estimate_audit_drink_forget": 0,
    "psychiatric_estimate_audit_accident_drink": 0,
    "psychiatric_estimate_audit_person_care": 0,
    "psychiatric_estimate_audit_point": -1,
    "loginname": null,
    "psychiatric_estimate_audit_date": "2014-11-03 00:00:00",
    "psychiatric_estimate_audit_type": "2",
    "psychiatric_estimate_audit_staff": "yuwa182",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_audit_id": 17,
    "vn": "571029060000",
    "an": "",
    "psychiatric_estimate_audit_drinking_frequent": 0,
    "psychiatric_estimate_audit_alcohol_drinking": 0,
    "psychiatric_estimate_audit_beer_drinking": null,
    "psychiatric_estimate_audit_spirit_drinking": null,
    "psychiatric_estimate_audit_overs_six_standard": 0,
    "psychiatric_estimate_audit_cant_stopdrink_peryear": 0,
    "psychiatric_estimate_audit_alway_drink": 0,
    "psychiatric_estimate_audit_alway_drink_morning": 0,
    "psychiatric_estimate_audit_feel_bad_drink": 0,
    "psychiatric_estimate_audit_drink_forget": 0,
    "psychiatric_estimate_audit_accident_drink": 0,
    "psychiatric_estimate_audit_person_care": 0,
    "psychiatric_estimate_audit_point": 0,
    "loginname": null,
    "psychiatric_estimate_audit_date": "2014-10-29 00:00:00",
    "psychiatric_estimate_audit_type": "0",
    "psychiatric_estimate_audit_staff": "yuwa125",
    "hos_guid": null
  }
]
```
