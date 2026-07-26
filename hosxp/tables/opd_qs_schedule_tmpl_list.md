# `opd_qs_schedule_tmpl_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_schedule_tmpl_list_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_schedule_tmpl_id | int(11) | YES | MUL | NULL |  |  |
| opd_queue_slot_id | int(11) | YES |  | NULL |  |  |
| opd_qs_limit_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_schedule_tmpl_id | opd_qs_schedule_tmpl_id | no | 1 |
| ix_unique | opd_qs_schedule_tmpl_id | no | 1 |
| ix_unique | opd_queue_slot_id | no | 2 |
| PRIMARY | opd_qs_schedule_tmpl_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
