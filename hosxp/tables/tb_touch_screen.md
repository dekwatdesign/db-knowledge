# `tb_touch_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_touch_screen_id | int(11) | NO | PRI | 0 |  |  |
| tb_touch_screen_question_id | int(11) | YES |  | NULL |  |  |
| tb_touch_screen_answer | char(1) | YES |  | NULL |  |  |
| tb_touch_screen_head_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_touch_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
