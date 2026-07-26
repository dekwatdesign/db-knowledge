# `blb_crossmatch_idn_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_crossmatch_idn_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_crossmatch_idn_id | int(11) | YES | MUL | NULL |  |  |
| blb_crossmatch_idn_list_so | char(2) | YES |  | NULL |  |  |
| blb_crossmatch_idn_list_rt | char(3) | YES |  | NULL |  |  |
| blb_crossmatch_idn_list_37c | char(3) | YES |  | NULL |  |  |
| blb_crossmatch_idn_list_iat | char(3) | YES |  | NULL |  |  |
| blb_crossmatch_idn_list_ccc | char(3) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_crossmatch_idn_id | blb_crossmatch_idn_id | no | 1 |
| PRIMARY | blb_crossmatch_idn_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
