# `drugitems_notify_send`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_notify_send_id | int(11) | NO | PRI | 0 |  |  |
| anvn | varchar(12) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| send_computer | varchar(150) | YES |  | NULL |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anvn | anvn | no | 1 |
| PRIMARY | drugitems_notify_send_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
