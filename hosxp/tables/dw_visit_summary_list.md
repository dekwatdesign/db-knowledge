# `dw_visit_summary_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hospcode | char(5) | YES |  | NULL |  |  |
| hospital_name | varchar(150) | YES |  | NULL |  |  |
| pttype_name | varchar(150) | YES |  | NULL |  |  |
| pttypeno | varchar(50) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| spclty_name | varchar(150) | YES |  | NULL |  |  |
| doctor_name | varchar(150) | YES |  | NULL |  |  |
| pdx | varchar(9) | YES |  | NULL |  |  |
| income | double(15,3) | YES |  | NULL |  |  |
| diagnosis_name | varchar(250) | YES |  | NULL |  |  |
| ovsost_name | varchar(150) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| cc | text | YES |  | NULL |  |  |
| pe | text | YES |  | NULL |  |  |
| cur_dep_busy | char(1) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
