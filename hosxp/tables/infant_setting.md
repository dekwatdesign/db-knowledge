# `infant_setting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_setting_registra_code | varchar(8) | NO | PRI |  |  |  |
| infant_setting_chwpart | varchar(2) | YES |  | NULL |  |  |
| infant_setting_trok_code | varchar(8) | YES |  | NULL |  |  |
| infant_setting_soi_code | varchar(8) | YES |  | NULL |  |  |
| infant_setting_road_code | varchar(8) | YES |  | NULL |  |  |
| infant_setting_mooban_code | varchar(8) | YES |  | NULL |  |  |
| infant_setting_addr | varchar(50) | YES |  | NULL |  |  |
| infant_authorize_cid | varchar(13) | YES |  | NULL |  |  |
| infant_registrar_name | varchar(150) | YES |  | NULL |  |  |
| infant_head_person_cid | varchar(13) | YES |  | NULL |  |  |
| infant_head_person_name | varchar(150) | YES |  | NULL |  |  |
| infant_setting_hospcode_dopa | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | infant_setting_registra_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
