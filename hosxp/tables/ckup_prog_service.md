# `ckup_prog_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_prog_service_id | int(11) | NO | PRI | 0 |  |  |
| ckup_service_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_mobile_link | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| ix_ckup_service_id | ckup_service_id | no | 1 |
| PRIMARY | ckup_prog_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
