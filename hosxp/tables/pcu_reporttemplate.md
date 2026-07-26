# `pcu_reporttemplate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| sqlparam | text | YES |  | NULL |  |  |
| sqltext | text | YES |  | NULL |  |  |
| template | longblob | YES |  | NULL |  |  |
| db | varchar(10) | YES | MUL | NULL |  |  |
| script | longtext | YES |  | NULL |  |  |
| use_parameter | char(1) | YES |  | NULL |  |  |
| module | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| report_version | double(15,3) | YES |  | NULL |  |  |
| download_count | int(11) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES |  | NULL |  |  |
| version | int(11) | YES |  | NULL |  |  |
| create_date | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| comment | text | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_db | db | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
