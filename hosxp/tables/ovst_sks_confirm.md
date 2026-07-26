# `ovst_sks_confirm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| check_code | varchar(250) | YES |  | NULL |  |  |
| raw_text | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| stat | varchar(250) | YES |  | NULL |  |  |
| station | varchar(250) | YES |  | NULL |  |  |
| line | varchar(250) | YES |  | NULL |  |  |
| authcode | varchar(250) | YES |  | NULL |  |  |
| dttran | varchar(250) | YES |  | NULL |  |  |
| invno | varchar(250) | YES |  | NULL |  |  |
| billno | varchar(250) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| memberno | varchar(250) | YES |  | NULL |  |  |
| amount_paid | double(15,3) | YES |  | NULL |  |  |
| file_checksum | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
