# `social_activity_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_activity_list_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| start_date | datetime | YES |  | NULL |  |  |
| end_date | datetime | YES |  | NULL |  |  |
| social_activity_list_price | decimal(10,0) | YES |  | NULL |  |  |
| social_activity_list_detail | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| social_activity_list_staff | varchar(250) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| social_activity_type_id | int(11) | YES | MUL | NULL |  |  |
| social_item_id | int(11) | YES | MUL | NULL |  |  |
| social_multidis_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor15 | doctor_code | no | 1 |
| ix_Refpatient35 | hn | no | 1 |
| ix_Refsocial_activity_type16 | social_activity_type_id | no | 1 |
| ix_Refsocial_item17 | social_item_id | no | 1 |
| ix_Refsocial_multidis18 | social_multidis_id | no | 1 |
| ix_social_activity_list_vn | vn | no | 1 |
| PRIMARY | social_activity_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
