# `dtmain_save`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dn | varchar(7) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| fee | double(15,3) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| icd | varchar(250) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| scount | int(11) | YES |  | NULL |  |  |
| tcount | int(11) | YES |  | NULL |  |  |
| tmcode | varchar(7) | YES |  | NULL |  |  |
| ttcode | varchar(250) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| vstage | int(11) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| tm_no | int(11) | YES |  | NULL |  |  |
| doctor_helper | varchar(6) | YES |  | NULL |  |  |
| rcount | int(11) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
