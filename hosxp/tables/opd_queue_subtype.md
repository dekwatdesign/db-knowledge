# `opd_queue_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_queue_subtype_id | int(11) | NO | PRI | 0 |  |  |
| opd_queue_subtype_name | varchar(200) | YES | UNI | NULL |  |  |
| show_spclty_select | char(1) | YES |  | NULL |  |  |
| button_visible | char(1) | YES |  | NULL |  |  |
| opd_queue_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_queue_subtype_name | opd_queue_subtype_name | yes | 1 |
| ix_qt | opd_queue_type_id | no | 1 |
| PRIMARY | opd_queue_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
