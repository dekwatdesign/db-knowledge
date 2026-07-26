# `opd_screen_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_screen_value_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| screen_name | varchar(100) | YES | MUL | NULL |  |  |
| screen_value | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_screen_name | screen_name | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opd_screen_value_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
