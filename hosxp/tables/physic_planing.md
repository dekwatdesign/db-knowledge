# `physic_planing`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_planing_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| physic_planing_items_id | int(11) | YES | MUL | NULL |  |  |
| physic_planing_items_name | varchar(255) | YES | MUL | NULL |  |  |
| physic_planing_detail | varchar(255) | YES |  | NULL |  |  |
| physic_planing_begin_date | date | YES | MUL | NULL |  |  |
| physic_planing_end_date | date | YES | MUL | NULL |  |  |
| physic_planing_status | char(1) | YES |  | NULL |  |  |
| physic_planing_last_date | date | YES | MUL | NULL |  |  |
| physic_planing_staff | varchar(255) | YES |  | NULL |  |  |
| physic_planing_lastupdate | datetime | YES | MUL | NULL |  |  |
| physic_planing_count | int(11) | YES | MUL | NULL |  |  |
| physic_planing_use_count | int(11) | YES | MUL | NULL |  |  |
| physic_planing_status_id | int(11) | YES | MUL | NULL |  |  |
| physic_planing_stop_date | date | YES | MUL | NULL |  |  |
| physic_planing_stop_comment | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_planing_begin_date | physic_planing_begin_date | no | 1 |
| ix_physic_planing_count | physic_planing_count | no | 1 |
| ix_physic_planing_end_date | physic_planing_end_date | no | 1 |
| ix_physic_planing_items_id | physic_planing_items_id | no | 1 |
| ix_physic_planing_items_name | physic_planing_items_name | no | 1 |
| ix_physic_planing_lastupdate | physic_planing_lastupdate | no | 1 |
| ix_physic_planing_last_date | physic_planing_last_date | no | 1 |
| ix_physic_planing_status_id | physic_planing_status_id | no | 1 |
| ix_physic_planing_stop_date | physic_planing_stop_date | no | 1 |
| ix_physic_planing_use_count | physic_planing_use_count | no | 1 |
| ix_physic_register_id | physic_register_id | no | 1 |
| PRIMARY | physic_planing_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
