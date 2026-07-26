# `oapp_mohprompt_notify`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_id | int(11) | NO | PRI | 0 |  |  |
| send_date | date | YES |  | NULL |  |  |
| send_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id_date_status | oapp_id | no | 1 |
| ix_id_date_status | send_date | no | 2 |
| ix_id_date_status | send_status | no | 3 |
| PRIMARY | oapp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
