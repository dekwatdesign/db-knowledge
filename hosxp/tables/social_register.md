# `social_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_register_id | int(11) | NO | PRI | 0 |  |  |
| social_number | int(11) | YES |  | NULL |  |  |
| social_telecare_number | varchar(13) | YES | MUL | NULL |  |  |
| social_register_startdate | date | YES | MUL | NULL |  |  |
| social_register_enddate | date | YES |  | NULL |  |  |
| social_register_lastupdate | datetime | YES |  | NULL |  |  |
| social_register_notes | text | YES |  | NULL |  |  |
| social_register_staff | varchar(15) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| social_termination_reason_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor8 | doctor_code | no | 1 |
| ix_Refpatient33 | hn | no | 1 |
| ix_Refsocial_termination_reason21 | social_termination_reason_id | no | 1 |
| ix_social_register_social_register_startdate | social_register_startdate | no | 1 |
| ix_social_register_social_telecare_number | social_telecare_number | no | 1 |
| PRIMARY | social_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "social_register_id": 1,
    "social_number": 1,
    "social_telecare_number": null,
    "social_register_startdate": "2023-11-21",
    "social_register_enddate": null,
    "social_register_lastupdate": "2023-11-21 13:39:58",
    "social_register_notes": null,
    "social_register_staff": "chatchawal",
    "doctor_code": "336",
    "social_termination_reason_id": null,
    "hn": "580001508"
  }
]
```
