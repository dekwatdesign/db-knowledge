# `psych_forensic_res_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_forensic_res_detail_id | int(11) | NO | PRI | 0 |  |  |
| staff_name | varchar(80) | YES |  | NULL |  |  |
| psych_forensic_res_edit_date | date | YES |  | NULL |  |  |
| psych_forensic_result_id | int(11) | YES | MUL | NULL |  |  |
| psych_comment_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_comment_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpsych_comment4 | psych_comment_id | no | 1 |
| ix_Refpsych_comment_type2 | psych_comment_type_id | no | 1 |
| ix_Refpsych_forensic_result1 | psych_forensic_result_id | no | 1 |
| PRIMARY | psych_forensic_res_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
