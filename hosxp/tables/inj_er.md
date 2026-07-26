# `inj_er`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tn | tinyint(4) | NO | PRI | 0 |  |  |
| erfrom | int(5) | YES |  | NULL |  |  |
| ertran | varchar(16) | YES |  | NULL |  |  |
| dcdate | date | YES |  | NULL |  |  |
| dctime | time | YES |  | NULL |  |  |
| erstay | int(4) | YES |  | NULL |  |  |
| erdoctor | varchar(7) | YES |  | NULL |  |  |
| ersbp | int(3) | YES |  | NULL |  |  |
| erpulse | int(3) | YES |  | NULL |  |  |
| erresp | int(2) | YES |  | NULL |  |  |
| ereye | int(2) | YES |  | NULL |  |  |
| erverb | int(2) | YES |  | NULL |  |  |
| ermotor | int(2) | YES |  | NULL |  |  |
| ergcs | int(2) | YES |  | NULL |  |  |
| errts | int(7) | YES |  | NULL |  |  |
| erps | tinyint(4) | YES |  | NULL |  |  |
| ercpr | varchar(15) | YES |  | NULL |  |  |
| erhct | int(4) | YES |  | NULL |  |  |
| eradmit | varchar(15) | YES |  | NULL |  |  |
| ais1 | int(2) | YES |  | NULL |  |  |
| ais2 | int(2) | YES |  | NULL |  |  |
| ais3 | int(3) | YES |  | NULL |  |  |
| ais4 | int(2) | YES |  | NULL |  |  |
| ais5 | int(5) | YES |  | NULL |  |  |
| ais6 | int(2) | YES |  | NULL |  |  |
| eriss | int(3) | YES |  | NULL |  |  |
| ericd | tinyint(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | tn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
