# `med_dose_calc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_dose_calc_type_id | int(11) | NO | PRI | 0 |  |  |
| med_dose_calc_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_med_dose_calc_type_name | med_dose_calc_type_name | yes | 1 |
| PRIMARY | med_dose_calc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "med_dose_calc_type_id": 1,
    "med_dose_calc_type_name": "Insulin Injection"
  },
  {
    "med_dose_calc_type_id": 2,
    "med_dose_calc_type_name": "Warfarin"
  },
  {
    "med_dose_calc_type_id": 4,
    "med_dose_calc_type_name": "ยาเม็ดรับประทาน"
  },
  {
    "med_dose_calc_type_id": 5,
    "med_dose_calc_type_name": "ยาจ่ายเป็นชุด"
  },
  {
    "med_dose_calc_type_id": 6,
    "med_dose_calc_type_name": "ยากดภูมิ (ส่งเบิก)"
  }
]
```
