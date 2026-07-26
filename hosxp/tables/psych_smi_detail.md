# `psych_smi_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_smi_detail_id | int(11) | NO | PRI | 0 |  |  |
| psych_smi_id | int(11) | YES | MUL | NULL |  |  |
| psych_smi_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_smi_note | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_smi_id | psych_smi_id | no | 1 |
| ix_psych_smi_type_id | psych_smi_type_id | no | 1 |
| PRIMARY | psych_smi_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
