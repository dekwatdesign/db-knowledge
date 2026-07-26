# `opdscreening`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES | MUL | NULL |  |  |
| computer | varchar(50) | YES |  | NULL |  |  |
| bpd | double(22,3) | YES |  | NULL |  |  |
| bps | double(22,3) | YES |  | NULL |  |  |
| bw | double(22,3) | YES |  | NULL |  |  |
| cc | varchar(250) | YES |  | NULL |  |  |
| p | double(22,3) | YES |  | NULL |  |  |
| rr | double(22,3) | YES |  | NULL |  |  |
| t | double(22,3) | YES |  | NULL |  |  |
| sctype | char(1) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vstdate_hn_vsttime | hn | no | 1 |
| ix_vstdate_hn_vsttime | vstdate | no | 2 |
| ix_vstdate_hn_vsttime | vsttime | no | 3 |
| PRIMARY | vn | yes | 1 |
| vstdate | vstdate | no | 1 |
| vstdate_hn_vsttime | vstdate | no | 1 |
| vstdate_hn_vsttime | hn | no | 2 |
| vstdate_hn_vsttime | vsttime | no | 3 |
| vsttime | vsttime | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
