# `anc_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| anc_number | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| decayed_tooth | tinyint(4) | YES |  | NULL |  |  |
| found_gingivitis | char(1) | YES |  | NULL |  |  |
| found_tartar | char(1) | YES |  | NULL |  |  |
| height | tinyint(4) | YES |  | NULL |  |  |
| weight | double(15,3) | YES |  | NULL |  |  |
| bmi | int(11) | YES |  | NULL |  |  |
| fbs | int(11) | YES |  | NULL |  |  |
| albumin | int(11) | YES |  | NULL |  |  |
| bps | tinyint(4) | YES |  | NULL |  |  |
| bpd | tinyint(4) | YES |  | NULL |  |  |
| visit_note | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
