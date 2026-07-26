# `opd_queue_panel_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_queue_panel_picture_id | int(11) | NO | PRI | 0 |  |  |
| opd_queue_panel_id | int(11) | YES | MUL | NULL |  |  |
| picture_data_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pid | opd_queue_panel_id | no | 1 |
| PRIMARY | opd_queue_panel_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
