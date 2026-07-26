# `bb_reserve`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_rsvcod | char(3) | NO | PRI |  |  |  |
| bb_rsvuni | varchar(11) | NO | PRI |  |  |  |
| bb_rsvhn | varchar(10) | NO | PRI |  |  |  |
| bb_rsvdate | date | YES |  | NULL |  |  |
| bb_rsvtime | time | YES |  | NULL |  |  |
| bb_rsveff | varchar(30) | YES |  | NULL |  |  |
| bb_warddesc | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | bb_rsvcod | yes | 1 |
| PRIMARY | bb_rsvuni | yes | 2 |
| PRIMARY | bb_rsvhn | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
