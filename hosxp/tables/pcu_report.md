# `pcu_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pcu_report_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| sqlparam | text | YES |  | NULL |  |  |
| sqltext | text | YES |  | NULL |  |  |
| template | longblob | YES |  | NULL |  |  |
| script | text | YES |  | NULL |  |  |
| user_parameter | char(1) | YES |  | NULL |  |  |
| module | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| script_dfm | text | YES |  | NULL |  |  |
| template_preview | longblob | YES |  | NULL |  |  |
| report_remark | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | pcu_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
