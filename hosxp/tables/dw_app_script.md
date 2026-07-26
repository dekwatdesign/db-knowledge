# `dw_app_script`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_app_script_id | int(11) | NO | PRI | 0 |  |  |
| script_name | varchar(200) | YES | UNI | NULL |  |  |
| script_text | text | YES |  | NULL |  |  |
| script_dfm | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_script_name | script_name | yes | 1 |
| PRIMARY | dw_app_script_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
