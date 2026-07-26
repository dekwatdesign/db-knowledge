# `hospital_profile`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_profile_id | int(11) | NO | PRI | 0 |  |  |
| hospital_thai_name | varchar(250) | YES |  | NULL |  |  |
| hospital_english_name | varchar(250) | YES |  | NULL |  |  |
| hospital_address1 | varchar(250) | YES |  | NULL |  |  |
| hospital_address2 | varchar(250) | YES |  | NULL |  |  |
| hospital_address_chwpart | char(2) | YES |  | NULL |  |  |
| hospital_address_amppart | char(2) | YES |  | NULL |  |  |
| hospital_address_tmbpart | char(2) | YES |  | NULL |  |  |
| hospital_phone | varchar(50) | YES |  | NULL |  |  |
| hospital_fax | varchar(50) | YES |  | NULL |  |  |
| hospital_email | varchar(50) | YES |  | NULL |  |  |
| general_information_text | longtext | YES |  | NULL |  |  |
| general_information_rtf | longtext | YES |  | NULL |  |  |
| hospital_owner_name | varchar(150) | YES |  | NULL |  |  |
| hospital_bed_amount | int(11) | YES |  | NULL |  |  |
| hospital_service_type_id | int(11) | YES |  | NULL |  |  |
| hospital_profile_update_datetime | datetime | YES |  | NULL |  |  |
| hospital_gis_latitude | varchar(30) | YES |  | NULL |  |  |
| hospital_gis_longitude | varchar(30) | YES |  | NULL |  |  |
| hospital_profile_mission | text | YES |  | NULL |  |  |
| hospital_profile_vision | text | YES |  | NULL |  |  |
| hospital_profile_website | varchar(200) | YES |  | NULL |  |  |
| hospital_owner_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| foundation_date | date | YES |  | NULL |  |  |
| pass_ha | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_profile_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hospital_profile_id": 1,
    "hospital_thai_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "hospital_english_name": "Yuwaprasart Waithayopathum  Hospital",
    "hospital_address1": "เลขที่ 61 ซอยเทศบาล 19 ถนนสุขุมวิท",
    "hospital_address2": null,
    "hospital_address_chwpart": "11",
    "hospital_address_amppart": "",
    "hospital_address_tmbpart": "",
    "hospital_phone": "02-3843381-3, 02-3805601-3, 02-3805605-6",
    "hospital_fax": "02-3941845",
    "hospital_email": "yuwahos@gmail.com",
    "general_information_text": null,
    "general_information_rtf": null,
    "hospital_owner_name": null,
    "hospital_bed_amount": 150,
    "hospital_service_type_id": 5,
    "hospital_profile_update_datetime": null,
    "hospital_gis_latitude": null,
    "hospital_gis_longitude": null,
    "hospital_profile_mission": null,
    "hospital_profile_vision": " \"เป็นผู้นำออทิสติกอันดับหนึ่งของประเทศ\"\r\n1. ให้บริการด้านสุขภาพจิตเด็กและวัยรุ่นในระดับตติยภูมิ และมีความเป็นเลิศด้านออทิสติก\r\n2. ผลิตและพัฒนานวัตกรรมและงานวิจัยทางจิตเวชและสุขภาพจิตเด็กและวัยรุ่น\r\n3. พัฒนาและสนับสนุนองค์ความรู้ให้เครือข่ายในระบบสุขภาพ เพื่อให้ผู้ป่วยจิตเวชเด็กและวัยรุ่นเข้าถึงบริการ\r\n4. ผลิตแพทย์เฉพาะทางด้านจิตเวชเด็กและวัยรุ่น\r\n5. พัฒนาระบบบริหารจัดการด้านบุคลากร งบประมาณและแผนงานโครงการและสารสนเทศให้มีประสิทธิภาพ",
    "hospital_profile_website": "www.yuwaprasart.com",
    "hospital_owner_type_id": 1,
    "hos_guid": "",
    "hospcode": null,
    "foundation_date": "1965-10-26",
    "pass_ha": "Y"
  }
]
```
