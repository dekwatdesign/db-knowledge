# `cmdb`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cmdb_id | int(11) | NO | PRI | 0 |  |  |
| hcode | char(5) | YES |  | NULL |  |  |
| hreg | char(5) | YES |  | NULL |  |  |
| hnr | varchar(10) | YES |  | NULL |  |  |
| st | varchar(2) | YES |  | NULL |  |  |
| rtype | varchar(20) | YES |  | NULL |  |  |
| rtypefk | varchar(20) | YES |  | NULL |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| idtype | char(1) | YES |  | NULL |  |  |
| memberno | varchar(25) | YES |  | NULL |  |  |
| kumnum | varchar(20) | YES |  | NULL |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| dob | date | YES |  | NULL |  |  |
| contact | varchar(25) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| marriage | varchar(2) | YES |  | NULL |  |  |
| changwat | varchar(2) | YES |  | NULL |  |  |
| amphur | varchar(2) | YES |  | NULL |  |  |
| occupation | varchar(5) | YES |  | NULL |  |  |
| nation | varchar(5) | YES |  | NULL |  |  |
| orgcode | varchar(10) | YES |  | NULL |  |  |
| orgprov | varchar(2) | YES |  | NULL |  |  |
| authno | varchar(20) | YES |  | NULL |  |  |
| authdate | date | YES |  | NULL |  |  |
| benftype | char(1) | YES |  | NULL |  |  |
| cspid | varchar(13) | YES |  | NULL |  |  |
| cssalute | varchar(20) | YES |  | NULL |  |  |
| csname | varchar(50) | YES |  | NULL |  |  |
| csrel | varchar(2) | YES |  | NULL |  |  |
| drdx | varchar(20) | YES |  | NULL |  |  |
| dx | varchar(20) | YES |  | NULL |  |  |
| dxdate | date | YES |  | NULL |  |  |
| dxother | varchar(20) | YES |  | NULL |  |  |
| spop | varchar(20) | YES |  | NULL |  |  |
| regtype | varchar(10) | YES |  | NULL |  |  |
| regdatetim | datetime | YES |  | NULL |  |  |
| multiple | varchar(10) | YES |  | NULL |  |  |
| lastupd | datetime | YES |  | NULL |  |  |
| dateeff | date | YES |  | NULL |  |  |
| dateexp | date | YES |  | NULL |  |  |
| flag | char(1) | YES |  | NULL |  |  |
| stat | char(1) | YES |  | NULL |  |  |
| usgflag | char(1) | YES |  | NULL |  |  |
| ver | varchar(2) | YES |  | NULL |  |  |
| edmark | varchar(10) | YES |  | NULL |  |  |
| repmark | varchar(10) | YES |  | NULL |  |  |
| histrec | int(11) | YES |  | NULL |  |  |
| tmpmark | varchar(10) | YES |  | NULL |  |  |
| agents | varchar(50) | YES |  | NULL |  |  |
| gov | varchar(1) | YES |  | NULL |  |  |
| chk | varchar(10) | YES |  | NULL |  |  |
| cmdb_batch_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cmdb_batch_id | cmdb_batch_id | no | 1 |
| ix_pid | pid | no | 1 |
| PRIMARY | cmdb_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
