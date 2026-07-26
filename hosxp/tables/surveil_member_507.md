# `surveil_member_507`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| surveil_member_507_id | int(11) | NO | PRI | 0 |  |  |
| sv_number | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| code506 | int(11) | YES |  | NULL |  |  |
| addr | varchar(50) | YES |  | NULL |  |  |
| moo | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| organism | varchar(250) | YES |  | NULL |  |  |
| complication | varchar(250) | YES |  | NULL |  |  |
| ovstost | char(2) | YES |  | NULL |  |  |
| death_date | date | YES |  | NULL |  |  |
| pdx | varchar(9) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| ptstat | char(1) | YES |  | NULL |  |  |
| send_epidem | char(1) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| hospital | int(11) | YES |  | NULL |  |  |
| hserv | varchar(10) | YES |  | NULL |  |  |
| metropol | int(11) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| sv_guid | varchar(38) | YES | MUL | NULL |  |  |
| data_sync | char(1) | YES |  | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| school_class | varchar(20) | YES |  | NULL |  |  |
| school_name | varchar(50) | YES |  | NULL |  |  |
| intime | char(1) | YES |  | NULL |  |  |
| epi_group_code | varchar(2) | YES |  | NULL |  |  |
| house_lat | varchar(50) | YES |  | NULL |  |  |
| house_long | varchar(50) | YES |  | NULL |  |  |
| pat_addr | varchar(50) | YES |  | NULL |  |  |
| pat_moo | varchar(5) | YES |  | NULL |  |  |
| pat_road | varchar(50) | YES |  | NULL |  |  |
| pat_chwpart | varchar(2) | YES |  | NULL |  |  |
| pat_amppart | varchar(2) | YES |  | NULL |  |  |
| pat_tmbpart | varchar(2) | YES |  | NULL |  |  |
| pat_death | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| change_datetime | datetime | YES |  | NULL |  |  |
| change_staff | varchar(100) | YES |  | NULL |  |  |
| send_epidem_507 | char(1) | YES |  | NULL |  |  |
| sv_guid_507 | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| e0_507 | int(11) | YES |  | NULL |  |  |
| e1_507 | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_pdx | pdx | no | 1 |
| ix_sv_guid | sv_guid | no | 1 |
| ix_sv_guid_507 | sv_guid_507 | no | 1 |
| ix_sv_number | sv_number | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | surveil_member_507_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
