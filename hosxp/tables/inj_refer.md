# `inj_refer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rn | tinyint(4) | YES | UNI | NULL |  |  |
| tn | tinyint(4) | YES | UNI | NULL |  |  |
| dispatcht | time | YES |  | NULL |  |  |
| scenet | time | YES |  | NULL |  |  |
| rdepartt | time | YES |  | NULL |  |  |
| rarrivet | time | YES |  | NULL |  |  |
| rsbp | int(11) | YES |  | NULL |  |  |
| rresp | int(2) | YES |  | NULL |  |  |
| rpulse | int(3) | YES |  | NULL |  |  |
| reye | int(2) | YES |  | NULL |  |  |
| rverb | int(2) | YES |  | NULL |  |  |
| rmotor | int(2) | YES |  | NULL |  |  |
| rgcs | int(2) | YES |  | NULL |  |  |
| rrts | int(7) | YES |  | NULL |  |  |
| rcpr | varchar(15) | YES |  | NULL |  |  |
| rairway | varchar(15) | YES |  | NULL |  |  |
| rfluid | int(15) | YES |  | NULL |  |  |
| rdrug | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| rn_unique | rn | yes | 1 |
| tn_unique | tn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
