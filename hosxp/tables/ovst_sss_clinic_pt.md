# `ovst_sss_clinic_pt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sss_clinic_pt_id | int(11) | NO | PRI | 0 |  |  |
| hmain | varchar(5) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| cd | varchar(3) | YES | MUL | NULL |  |  |
| svcnt | int(11) | YES |  | NULL |  |  |
| since | date | YES |  | NULL |  |  |
| upto | date | YES |  | NULL |  |  |
| drugvisit | int(11) | YES |  | NULL |  |  |
| uptodrug | date | YES |  | NULL |  |  |
| dxvisit | int(11) | YES |  | NULL |  |  |
| uptodx | date | YES |  | NULL |  |  |
| source | varchar(5) | YES |  | NULL |  |  |
| ssdiagdt | date | YES |  | NULL |  |  |
| conf | char(1) | YES |  | NULL |  |  |
| confdt | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pid_cd | cd | yes | 1 |
| ix_pid_cd | pid | yes | 2 |
| PRIMARY | ovst_sss_clinic_pt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
