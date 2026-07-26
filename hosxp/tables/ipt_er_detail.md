# `ipt_er_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_er_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipt_er_list_id | int(11) | YES |  | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| begin_time | datetime | YES |  | NULL |  |  |
| end_time | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_er_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
