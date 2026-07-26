# `patient_odontogram`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| patient_odontogram_data | longtext | YES |  | NULL |  |  |
| patient_odontogram_type | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| dental_care_type_id | int(11) | YES |  | NULL |  |  |
| dental_care_service_place_type_id | int(11) | YES |  | NULL |  |  |
| dental_care_nprosthesis_id | int(11) | YES |  | NULL |  |  |
| dental_care_gum_type_id_1 | int(11) | YES |  | NULL |  |  |
| dental_care_gum_type_id_2 | int(11) | YES |  | NULL |  |  |
| dental_care_gum_type_id_3 | int(11) | YES |  | NULL |  |  |
| dental_care_gum_type_id_4 | int(11) | YES |  | NULL |  |  |
| dental_care_gum_type_id_5 | int(11) | YES |  | NULL |  |  |
| dental_care_gum_type_id_6 | int(11) | YES |  | NULL |  |  |
| dental_care_gum_type_result | int(11) | YES |  | NULL |  |  |
| care_text | longtext | YES |  | NULL |  |  |
| dental_care_school_type_id | int(11) | YES |  | NULL |  |  |
| dental_care_school_class_type_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
