# `ovst_vaccine_reaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_vaccine_reaction_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| ovst_vaccine_id | int(11) | YES | MUL | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| reaction_text | text | YES |  | NULL |  |  |
| vaccine_reaction_type_id | int(11) | YES |  | NULL |  |  |
| reaction_date | date | YES |  | NULL |  |  |
| vaccine_allergy_symptom_id | int(11) | YES |  | NULL |  |  |
| vaccine_allergy_stage_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ovst_vaccine_id | ovst_vaccine_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_vaccine_reaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_vaccine_reaction_id": 4,
    "vn": "640525060341",
    "ovst_vaccine_id": 271,
    "entry_datetime": "2021-05-25 14:11:16",
    "entry_staff": "yuwa212",
    "reaction_text": null,
    "vaccine_reaction_type_id": 1,
    "reaction_date": "2021-05-25",
    "vaccine_allergy_symptom_id": 9,
    "vaccine_allergy_stage_id": 1
  },
  {
    "ovst_vaccine_reaction_id": 8,
    "vn": "640622112440",
    "ovst_vaccine_id": 2133,
    "entry_datetime": "2021-06-22 12:34:53",
    "entry_staff": "yuwa278",
    "reaction_text": "ชามือหลังฉีด",
    "vaccine_reaction_type_id": 1,
    "reaction_date": "2021-06-22",
    "vaccine_allergy_symptom_id": 10,
    "vaccine_allergy_stage_id": 1
  },
  {
    "ovst_vaccine_reaction_id": 9,
    "vn": "640622100016",
    "ovst_vaccine_id": 2066,
    "entry_datetime": "2021-06-22 12:36:53",
    "entry_staff": "yuwa278",
    "reaction_text": "วิงเวียน",
    "vaccine_reaction_type_id": 1,
    "reaction_date": "2021-06-22",
    "vaccine_allergy_symptom_id": 10,
    "vaccine_allergy_stage_id": 1
  },
  {
    "ovst_vaccine_reaction_id": 10,
    "vn": "640622100303",
    "ovst_vaccine_id": 2032,
    "entry_datetime": "2021-06-22 12:37:51",
    "entry_staff": "yuwa278",
    "reaction_text": "วิงเวียนศีรษะ",
    "vaccine_reaction_type_id": 1,
    "reaction_date": "2021-06-22",
    "vaccine_allergy_symptom_id": 10,
    "vaccine_allergy_stage_id": 1
  },
  {
    "ovst_vaccine_reaction_id": 11,
    "vn": "640622094008",
    "ovst_vaccine_id": 2047,
    "entry_datetime": "2021-06-22 12:38:48",
    "entry_staff": "yuwa278",
    "reaction_text": "วิงเวียนศีรษะ",
    "vaccine_reaction_type_id": 1,
    "reaction_date": "2021-06-22",
    "vaccine_allergy_symptom_id": 10,
    "vaccine_allergy_stage_id": 1
  },
  {
    "ovst_vaccine_reaction_id": 12,
    "vn": "640622083150",
    "ovst_vaccine_id": 1967,
    "entry_datetime": "2021-06-22 12:42:08",
    "entry_staff": "yuwa278",
    "reaction_text": "วิงเวียนศีรษะ",
    "vaccine_reaction_type_id": 1,
    "reaction_date": "2021-06-22",
    "vaccine_allergy_symptom_id": 10,
    "vaccine_allergy_stage_id": 1
  },
  {
    "ovst_vaccine_reaction_id": 13,
    "vn": "640622091442",
    "ovst_vaccine_id": 1959,
    "entry_datetime": "2021-06-22 12:43:28",
    "entry_staff": "yuwa278",
    "reaction_text": "วิงเวียนศีรษะ",
    "vaccine_reaction_type_id": 1,
    "reaction_date": "2021-06-22",
    "vaccine_allergy_symptom_id": 10,
    "vaccine_allergy_stage_id": 1
  },
  {
    "ovst_vaccine_reaction_id": 17,
    "vn": "640630090056",
    "ovst_vaccine_id": 3443,
    "entry_datetime": "2021-06-30 11:37:00",
    "entry_staff": "yuwa300",
    "reaction_text": null,
    "vaccine_reaction_type_id": 2,
    "reaction_date": "2021-06-30",
    "vaccine_allergy_symptom_id": 6,
    "vaccine_allergy_stage_id": 1
  }
]
```
