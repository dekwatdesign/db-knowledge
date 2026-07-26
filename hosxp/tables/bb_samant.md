# `bb_samant`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_alabno | varchar(7) | NO | PRI |  |  |  |
| bb_ausr | varchar(3) | YES |  | NULL |  |  |
| bb_adate | date | YES |  | NULL |  |  |
| bb_atime | varchar(5) | YES |  | NULL |  |  |
| bb_ao1rt | varchar(2) | YES |  | NULL |  |  |
| bb_ao137 | varchar(2) | YES |  | NULL |  |  |
| bb_ao1at | varchar(2) | YES |  | NULL |  |  |
| bb_ap137 | varchar(2) | YES |  | NULL |  |  |
| bb_ares1 | varchar(2) | YES |  | NULL |  |  |
| bb_ao2rt | varchar(2) | YES |  | NULL |  |  |
| bb_ao237 | varchar(2) | YES |  | NULL |  |  |
| bb_ao2at | varchar(2) | YES |  | NULL |  |  |
| bb_ap237 | varchar(2) | YES |  | NULL |  |  |
| bb_ares2 | varchar(2) | YES |  | NULL |  |  |
| bb_hn | varchar(9) | YES |  | NULL |  |  |
| bb_username | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | bb_alabno | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
