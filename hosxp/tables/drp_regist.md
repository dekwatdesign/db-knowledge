# `drp_regist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_regist_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| intervention_time_min | int(11) | YES |  | NULL |  |  |
| drp_outcome_type_id | int(11) | YES |  | NULL |  |  |
| medication_name | varchar(200) | YES |  | NULL |  |  |
| medication_active_substance | varchar(200) | YES |  | NULL |  |  |
| drp_problem_type_id | int(11) | YES |  | NULL |  |  |
| drp_discover_type_id | int(11) | YES |  | NULL |  |  |
| drp_regist_date | date | YES |  | NULL |  |  |
| drp_description_text | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | drp_regist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drp_regist_id": 1,
    "hn": "600000929",
    "vn": "630313075600",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  },
  {
    "drp_regist_id": 2,
    "hn": "530107149",
    "vn": "630313080550",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  },
  {
    "drp_regist_id": 3,
    "hn": "550000751",
    "vn": "630313082031",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  },
  {
    "drp_regist_id": 4,
    "hn": "590001066",
    "vn": "630313083944",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  },
  {
    "drp_regist_id": 5,
    "hn": "530133354",
    "vn": "630313084739",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  },
  {
    "drp_regist_id": 6,
    "hn": "570000087",
    "vn": "630313085348",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  },
  {
    "drp_regist_id": 7,
    "hn": "560001351",
    "vn": "630313085214",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  },
  {
    "drp_regist_id": 8,
    "hn": "590001698",
    "vn": "630313091655",
    "an": null,
    "department": null,
    "officer_id": null,
    "intervention_time_min": null,
    "drp_outcome_type_id": null,
    "medication_name": null,
    "medication_active_substance": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_regist_date": null,
    "drp_description_text": null
  }
]
```
