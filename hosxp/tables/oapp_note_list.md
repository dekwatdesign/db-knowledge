# `oapp_note_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_note_list_id | int(11) | NO | PRI | 0 |  |  |
| note_cc | varchar(250) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff_cc | staff | no | 1 |
| ix_staff_cc | note_cc | no | 2 |
| ix_staff_cc_index | note_cc | no | 1 |
| ix_staff_cc_index | staff | no | 2 |
| PRIMARY | oapp_note_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
