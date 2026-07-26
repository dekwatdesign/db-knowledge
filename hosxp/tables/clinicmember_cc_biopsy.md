# `clinicmember_cc_biopsy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cc_biopsy_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cc_list_id | int(11) | YES | MUL | NULL |  |  |
| cm_biopsy_location_type_id | int(11) | YES |  | NULL |  |  |
| biopsy_no | varchar(100) | YES |  | NULL |  |  |
| biopsy_exam_date | date | YES |  | NULL |  |  |
| biopsy_result_date | date | YES |  | NULL |  |  |
| biopsy_result_text | text | YES |  | NULL |  |  |
| cm_biopsy_exam_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_list_id | clinicmember_cc_list_id | no | 1 |
| PRIMARY | clinicmember_cc_biopsy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
