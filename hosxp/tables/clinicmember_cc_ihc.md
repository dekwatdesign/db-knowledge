# `clinicmember_cc_ihc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cc_ihc_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cc_list_id | int(11) | YES | MUL | NULL |  |  |
| ihc_date | date | YES |  | NULL |  |  |
| ihc_result_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_list_id | clinicmember_cc_list_id | no | 1 |
| PRIMARY | clinicmember_cc_ihc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
