# `opdscreen_audit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_audit_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | yes | 1 |
| PRIMARY | opdscreen_audit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
