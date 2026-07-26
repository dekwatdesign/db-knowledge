# `tb_emr_opd_image_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| file_id | varchar(20) | NO | PRI |  |  |  |
| file_name | varchar(255) | YES |  | NULL |  |  |
| file_name_old | varchar(255) | YES |  | NULL |  |  |
| file_ext | varchar(10) | YES |  | NULL |  |  |
| file_size | double(11,2) | YES |  | NULL |  |  |
| file_name_resize | varchar(255) | YES |  | NULL |  |  |
| file_image_type | varchar(50) | YES |  | NULL |  |  |
| file_server_save | varchar(50) | YES |  | NULL |  |  |
| file_folder | varchar(255) | YES |  | NULL |  |  |
| file_folder_resize | varchar(255) | YES |  | NULL |  |  |
| file_user_log | varchar(50) | YES |  | NULL |  |  |
| file_datetime | datetime | YES |  | NULL |  |  |
| file_delete_user | varchar(50) | YES |  | NULL |  |  |
| file_delete_datetime | datetime | YES |  | NULL |  |  |
| file_delete_status | char(2) | YES |  | NULL |  |  |
| file_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | file_id | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "vn": "620527101017",
    "hn": "530161154",
    "file_id": "F2019052710450312743",
    "file_name": "VN620527101017_2019052710450316383.jpg",
    "file_name_old": "Jellyfish.jpg",
    "file_ext": "jpg",
    "file_size": 757.52,
    "file_name_resize": "VN620527101017_2019052710450316383_resize.jpg",
    "file_image_type": "OpdPeImage",
    "file_server_save": "OpdPeImage",
    "file_folder": "opd_pe_image/OpdPeImage/VN620527101017",
    "file_folder_resize": "opd_pe_image/OpdPeImage/VN620527101017/VN620527101017_resize",
    "file_user_log": "bms",
    "file_datetime": "2019-05-27 10:39:15",
    "file_delete_user": null,
    "file_delete_datetime": null,
    "file_delete_status": null,
    "file_status": "Y"
  },
  {
    "vn": "620527101017",
    "hn": "530161154",
    "file_id": "F2019052710450378301",
    "file_name": "VN620527101017_2019052710450376703.jpg",
    "file_name_old": "Desert.jpg",
    "file_ext": "jpg",
    "file_size": 826.11,
    "file_name_resize": "VN620527101017_2019052710450376703_resize.jpg",
    "file_image_type": "OpdPeImage",
    "file_server_save": "OpdPeImage",
    "file_folder": "opd_pe_image/OpdPeImage/VN620527101017",
    "file_folder_resize": "opd_pe_image/OpdPeImage/VN620527101017/VN620527101017_resize",
    "file_user_log": "bms",
    "file_datetime": "2019-05-27 10:39:15",
    "file_delete_user": null,
    "file_delete_datetime": null,
    "file_delete_status": null,
    "file_status": "Y"
  },
  {
    "vn": "620809110018",
    "hn": "530161154",
    "file_id": "F2019091112372798989",
    "file_name": "VN620809110018_2019091112372798145.jpg",
    "file_name_old": "sale_kiosk_120419.jpg",
    "file_ext": "jpg",
    "file_size": 831.91,
    "file_name_resize": "VN620809110018_2019091112372798145_resize.jpg",
    "file_image_type": "OpdPeImage",
    "file_server_save": "OpdPeImage",
    "file_folder": "opd_pe_image/OpdPeImage/VN620809110018",
    "file_folder_resize": "opd_pe_image/OpdPeImage/VN620809110018/VN620809110018_resize",
    "file_user_log": "chatchawal",
    "file_datetime": "2019-09-11 12:17:22",
    "file_delete_user": null,
    "file_delete_datetime": null,
    "file_delete_status": null,
    "file_status": "Y"
  }
]
```
