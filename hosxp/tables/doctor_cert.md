# `doctor_cert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_cert_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| ptname | varchar(250) | YES |  | NULL |  |  |
| doctor_name | varchar(150) | YES |  | NULL |  |  |
| cid | varchar(25) | YES |  | NULL |  |  |
| doctor_license_no | varchar(25) | YES |  | NULL |  |  |
| hospital_address | varchar(250) | YES |  | NULL |  |  |
| hospital_name | varchar(150) | YES |  | NULL |  |  |
| note1 | text | YES |  | NULL |  |  |
| note2 | text | YES |  | NULL |  |  |
| date1 | date | YES |  | NULL |  |  |
| date2 | date | YES |  | NULL |  |  |
| pt_address | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| confirm_date | date | YES |  | NULL |  |  |
| confirm_note | varchar(250) | YES |  | NULL |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| symptom | varchar(250) | YES |  | NULL |  |  |
| ill_date_count | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| last_print_datetime | datetime | YES |  | NULL |  |  |
| doctor_cert_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| doctor_cert_number | varchar(20) | YES |  | NULL |  |  |
| doctor_cert_date | date | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| diag_text | text | YES |  | NULL |  |  |
| confirm_illness | char(1) | YES |  | NULL |  |  |
| confirm_hospital_visit | char(1) | YES |  | NULL |  |  |
| issue_digital_certificate | char(1) | YES |  | NULL |  |  |
| issue_digital_qrcode | char(1) | YES |  | NULL |  |  |
| use_eng_document | char(1) | YES |  | NULL |  |  |
| provider_id_token | varchar(5000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor_code | doctor_code | no | 1 |
| hn | hn | no | 1 |
| ix_cert_date | doctor_cert_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | doctor_cert_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_cert_id": 9,
    "doctor_code": "247",
    "hn": "530165348",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "",
    "hospital_address": "ทดสอบ (กรอกช่องแรก)",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": "กรองช่อง 2",
    "note2": "สุขภาพแข็งแรงสมบูรณ์",
    "date1": "2012-02-29",
    "date2": "2012-02-29",
    "pt_address": "10 หมู่  ต.ปากน้ำ  อ.เมืองสมุทรปราการ จ.สมุทรปราการ",
    "staff": null,
    "vn": "550229090004",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 3,
    "approve": null,
    "symptom": "(ไม่มีให้เลือก) บรรทัด \"มีอาการ\"",
    "ill_date_count": 1,
    "an": "",
    "last_print_datetime": "2012-02-29 08:38:58",
    "doctor_cert_type_id": 3,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  },
  {
    "doctor_cert_id": 10,
    "doctor_code": "187",
    "hn": "530138747",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "",
    "hospital_address": "",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": "",
    "note2": "",
    "date1": "2012-07-27",
    "date2": "2012-07-27",
    "pt_address": "61/375 หมู่ 3 ต.บางปลา  อ.บางพลี จ.สมุทรปราการ",
    "staff": null,
    "vn": "550618084101",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 1,
    "approve": null,
    "symptom": "ออทิสซึม",
    "ill_date_count": 1,
    "an": "550000618",
    "last_print_datetime": "2012-07-27 15:47:33",
    "doctor_cert_type_id": null,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  },
  {
    "doctor_cert_id": 11,
    "doctor_code": "247",
    "hn": "560001817",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "",
    "hospital_address": "ทดสอบ (กรอกช่องแรก)",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": "",
    "note2": "สุขภาพแข็งแรงสมบูรณ์",
    "date1": "2013-10-22",
    "date2": "2013-10-22",
    "pt_address": "23/22 หมู่ 9 ต.บางเมือง  อ.เมืองสมุทรปราการ จ.สมุทรปราการ",
    "staff": null,
    "vn": "561022075316",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 1,
    "approve": null,
    "symptom": "",
    "ill_date_count": 1,
    "an": "",
    "last_print_datetime": "2013-10-22 09:45:12",
    "doctor_cert_type_id": 5,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  },
  {
    "doctor_cert_id": 12,
    "doctor_code": "247",
    "hn": "560001817",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "",
    "hospital_address": "ทดสอบ (กรอกช่องแรก)",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": "",
    "note2": "สุขภาพแข็งแรงสมบูรณ์",
    "date1": "2013-10-22",
    "date2": "2013-10-22",
    "pt_address": "23/22 หมู่ 9 ต.บางเมือง  อ.เมืองสมุทรปราการ จ.สมุทรปราการ",
    "staff": null,
    "vn": "561022075316",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 1,
    "approve": null,
    "symptom": "",
    "ill_date_count": 1,
    "an": "",
    "last_print_datetime": "2013-10-22 09:45:25",
    "doctor_cert_type_id": 6,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  },
  {
    "doctor_cert_id": 13,
    "doctor_code": "168",
    "hn": "530186253",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "",
    "hospital_address": "",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": "",
    "note2": "",
    "date1": null,
    "date2": null,
    "pt_address": "70/236 หมู่ 11 แขวง มีนบุรี  เขตมีนบุรี จ.กรุงเทพมหานคร",
    "staff": null,
    "vn": "570626133020",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 1,
    "approve": null,
    "symptom": "",
    "ill_date_count": 1,
    "an": "",
    "last_print_datetime": "2014-06-26 12:10:29",
    "doctor_cert_type_id": null,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  },
  {
    "doctor_cert_id": 14,
    "doctor_code": "187",
    "hn": "550000694",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "",
    "hospital_address": "",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": "",
    "note2": "",
    "date1": "2015-02-03",
    "date2": "2015-02-03",
    "pt_address": "1661 หมู่  แขวง บางนา  เขตบางนา จ.กรุงเทพมหานคร",
    "staff": null,
    "vn": "580105080000",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 1,
    "approve": null,
    "symptom": "",
    "ill_date_count": 1,
    "an": "",
    "last_print_datetime": "2015-02-03 17:53:28",
    "doctor_cert_type_id": null,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  },
  {
    "doctor_cert_id": 15,
    "doctor_code": "187",
    "hn": "550000694",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "",
    "hospital_address": "",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": "",
    "note2": "",
    "date1": "2015-02-03",
    "date2": "2015-02-03",
    "pt_address": "1661 หมู่  แขวง บางนา  เขตบางนา จ.กรุงเทพมหานคร",
    "staff": null,
    "vn": "580105080000",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 1,
    "approve": null,
    "symptom": "",
    "ill_date_count": 1,
    "an": "",
    "last_print_datetime": "2015-02-03 17:54:12",
    "doctor_cert_type_id": null,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  },
  {
    "doctor_cert_id": 16,
    "doctor_code": "284",
    "hn": "590000513",
    "ptname": "[MASKED_FULLNAME]",
    "doctor_name": "[MASKED_FULLNAME]",
    "cid": "1-xxxx-xxxxx-xx-x",
    "doctor_license_no": "ว.36710",
    "hospital_address": "",
    "hospital_name": "โรงพยาบาล ยุวประสาทไวทโยปถัมภ์",
    "note1": null,
    "note2": null,
    "date1": "2016-10-03",
    "date2": "2016-10-03",
    "pt_address": "559/233 หมู่  แขวง ช่องนนทรี  เขตยานนาวา จ.กรุงเทพมหานคร",
    "staff": null,
    "vn": "591003113004",
    "confirm": null,
    "confirm_date": null,
    "confirm_note": null,
    "print_count": 1,
    "approve": null,
    "symptom": "",
    "ill_date_count": 1,
    "an": "",
    "last_print_datetime": "2016-10-03 16:04:20",
    "doctor_cert_type_id": 2,
    "hos_guid": null,
    "create_datetime": null,
    "update_datetime": null,
    "doctor_cert_number": null,
    "doctor_cert_date": null,
    "opi_guid": null,
    "diag_text": null,
    "confirm_illness": null,
    "confirm_hospital_visit": null,
    "issue_digital_certificate": null,
    "issue_digital_qrcode": null,
    "use_eng_document": null,
    "provider_id_token": null
  }
]
```
