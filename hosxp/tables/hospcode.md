# `hospcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| amppart | char(2) | YES | MUL | NULL |  |  |
| chwpart | char(2) | YES | MUL | NULL |  |  |
| hospcode | varchar(9) | NO | PRI |  |  |  |
| hosptype | varchar(50) | YES | MUL | NULL |  |  |
| name | varchar(100) | YES | MUL | NULL |  |  |
| tmbpart | char(2) | YES | MUL | NULL |  |  |
| moopart | char(2) | YES |  | NULL |  |  |
| sss_code | varchar(12) | YES |  | NULL |  |  |
| sss_code_sub | varchar(12) | YES |  | NULL |  |  |
| hospcode506 | varchar(15) | YES |  | NULL |  |  |
| hospital_type_id | int(11) | YES |  | NULL |  |  |
| bed_count | int(11) | YES |  | NULL |  |  |
| po_code | varchar(5) | YES |  | NULL |  |  |
| hospital_level_id | int(11) | YES |  | NULL |  |  |
| hospital_phone | varchar(50) | YES |  | NULL |  |  |
| hospital_fax | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| addrpart | varchar(150) | YES |  | NULL |  |  |
| area_code | varchar(2) | YES |  | NULL |  |  |
| region_id | int(11) | YES |  | NULL |  |  |
| hospcode_5_digit | varchar(9) | YES |  | NULL |  |  |
| hospcode_9_digit | varchar(9) | YES |  | NULL |  |  |
| active_status | char(1) | YES | MUL | NULL |  |  |
| zone | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| amppart | amppart | no | 1 |
| chwpart | chwpart | no | 1 |
| hosptype | hosptype | no | 1 |
| ix_active_status | active_status | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name_active_status | active_status | no | 1 |
| ix_name_active_status | name | no | 2 |
| ix_tmbpart_amppart | amppart | no | 1 |
| ix_tmbpart_amppart | chwpart | no | 2 |
| ix_tmbpart_amppart | tmbpart | no | 3 |
| name | name | no | 1 |
| PRIMARY | hospcode | yes | 1 |
| tmbpart | tmbpart | no | 1 |
| tmbpart_amppart | tmbpart | no | 1 |
| tmbpart_amppart | amppart | no | 2 |
| tmbpart_amppart | chwpart | no | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "amppart": "00",
    "chwpart": "00",
    "hospcode": "00000",
    "hosptype": "",
    "name": "โรงพยาบาลทดสอบระบบ",
    "tmbpart": "00",
    "moopart": "00",
    "sss_code": "",
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 16,
    "bed_count": 0,
    "po_code": "",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "00",
    "area_code": "",
    "region_id": 0,
    "hospcode_5_digit": "00000",
    "hospcode_9_digit": "000000000",
    "active_status": "Y",
    "zone": null
  },
  {
    "amppart": "01",
    "chwpart": "11",
    "hospcode": "00001",
    "hosptype": "",
    "name": "สำนักงานสาธารณสุขจังหวัดสมุทรปราการ",
    "tmbpart": "01",
    "moopart": "0",
    "sss_code": null,
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 1,
    "bed_count": 0,
    "po_code": "12070",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "186/1 ถ.ยุทธดำเนิน",
    "area_code": "06",
    "region_id": 6,
    "hospcode_5_digit": "00001",
    "hospcode_9_digit": "000000100",
    "active_status": "N",
    "zone": null
  },
  {
    "amppart": "01",
    "chwpart": "12",
    "hospcode": "00002",
    "hosptype": "",
    "name": "สำนักงานสาธารณสุขจังหวัดนนทบุรี",
    "tmbpart": "04",
    "moopart": "8",
    "sss_code": null,
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 1,
    "bed_count": 0,
    "po_code": "11000",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "ถ.รัตนาธิเบศร์",
    "area_code": "04",
    "region_id": 4,
    "hospcode_5_digit": "00002",
    "hospcode_9_digit": "000000200",
    "active_status": "N",
    "zone": null
  },
  {
    "amppart": "01",
    "chwpart": "13",
    "hospcode": "00003",
    "hosptype": "",
    "name": "สำนักงานสาธารณสุขจังหวัดปทุมธานี",
    "tmbpart": "01",
    "moopart": "0",
    "sss_code": null,
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 1,
    "bed_count": 0,
    "po_code": "12000",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "14 ถ.รัฐอำนวย",
    "area_code": "04",
    "region_id": 4,
    "hospcode_5_digit": "00003",
    "hospcode_9_digit": "000000300",
    "active_status": "N",
    "zone": null
  },
  {
    "amppart": "01",
    "chwpart": "14",
    "hospcode": "00004",
    "hosptype": "",
    "name": "สำนักงานสาธารณสุขจังหวัดพระนครศรีอยุธยา",
    "tmbpart": "03",
    "moopart": "0",
    "sss_code": null,
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 1,
    "bed_count": 0,
    "po_code": "",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "",
    "area_code": "04",
    "region_id": 4,
    "hospcode_5_digit": "00004",
    "hospcode_9_digit": "000000400",
    "active_status": "N",
    "zone": null
  },
  {
    "amppart": "01",
    "chwpart": "15",
    "hospcode": "00005",
    "hosptype": "",
    "name": "สำนักงานสาธารณสุขจังหวัดอ่างทอง",
    "tmbpart": "08",
    "moopart": "0",
    "sss_code": null,
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 1,
    "bed_count": 0,
    "po_code": "",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "ชั้น - ห้อง - หมู่บ้าน - ซอย - ถนน -",
    "area_code": "04",
    "region_id": 4,
    "hospcode_5_digit": "00005",
    "hospcode_9_digit": "000000500",
    "active_status": "N",
    "zone": null
  },
  {
    "amppart": "01",
    "chwpart": "16",
    "hospcode": "00006",
    "hosptype": "",
    "name": "สำนักงานสาธารณสุขจังหวัดลพบุรี",
    "tmbpart": "01",
    "moopart": "0",
    "sss_code": null,
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 1,
    "bed_count": 0,
    "po_code": "15000",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "260/55 ชุมชน 4 สันติสุข ถนนพหลโยธิน เทศบาลเมืองเขาสามยอด",
    "area_code": "04",
    "region_id": 4,
    "hospcode_5_digit": "00006",
    "hospcode_9_digit": "000000600",
    "active_status": "N",
    "zone": null
  },
  {
    "amppart": "01",
    "chwpart": "17",
    "hospcode": "00007",
    "hosptype": "",
    "name": "สำนักงานสาธารณสุขจังหวัดสิงห์บุรี",
    "tmbpart": "06",
    "moopart": "4",
    "sss_code": null,
    "sss_code_sub": null,
    "hospcode506": null,
    "hospital_type_id": 1,
    "bed_count": 0,
    "po_code": "16000",
    "hospital_level_id": null,
    "hospital_phone": "",
    "hospital_fax": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "addrpart": "44/4",
    "area_code": "04",
    "region_id": 4,
    "hospcode_5_digit": "00007",
    "hospcode_9_digit": "000000700",
    "active_status": "N",
    "zone": null
  }
]
```
