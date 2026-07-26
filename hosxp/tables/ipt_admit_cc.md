# `ipt_admit_cc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_admit_cc_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| icnp_cc_id | int(11) | YES |  | NULL |  |  |
| icnp_cc_value | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_admit_cc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
