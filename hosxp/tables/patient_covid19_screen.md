# `patient_covid19_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_covid19_screen_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| covid19_screen_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| screen_datetime | datetime | YES |  | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| has_fever | char(1) | YES |  | NULL |  |  |
| has_cough | char(1) | YES |  | NULL |  |  |
| has_sore_throats | char(1) | YES |  | NULL |  |  |
| has_runny_nose | char(1) | YES |  | NULL |  |  |
| has_shortness_of_breath | char(1) | YES |  | NULL |  |  |
| has_risk_travel | char(1) | YES |  | NULL |  |  |
| has_contact_with_suspected | char(1) | YES |  | NULL |  |  |
| has_career_opportunity | char(1) | YES |  | NULL |  |  |
| has_risk_location | char(1) | YES |  | NULL |  |  |
| is_medical_staff | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hd | hn | no | 1 |
| ix_hd | screen_date | no | 2 |
| ix_hn | hn | no | 1 |
| PRIMARY | patient_covid19_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "patient_covid19_screen_id": 1,
    "hn": "530160948",
    "covid19_screen_type_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "screen_datetime": "2020-03-16 07:52:17",
    "screen_date": "2020-03-16",
    "has_fever": null,
    "has_cough": null,
    "has_sore_throats": null,
    "has_runny_nose": null,
    "has_shortness_of_breath": null,
    "has_risk_travel": null,
    "has_contact_with_suspected": null,
    "has_career_opportunity": null,
    "has_risk_location": null,
    "is_medical_staff": null
  }
]
```
