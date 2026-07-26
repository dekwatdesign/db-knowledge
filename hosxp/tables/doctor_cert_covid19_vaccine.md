# `doctor_cert_covid19_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_cert_covid19_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| doctor_cert_id | int(11) | YES | MUL | NULL |  |  |
| vaccine_date | date | YES |  | NULL |  |  |
| vaccine_name | varchar(150) | YES |  | NULL |  |  |
| vaccine_manufacturer_name | varchar(150) | YES |  | NULL |  |  |
| vaccine_lot_number | varchar(50) | YES |  | NULL |  |  |
| vaccine_place | varchar(150) | YES |  | NULL |  |  |
| vaccine_dose_no | int(11) | YES |  | NULL |  |  |
| eu_qr_code | text | YES |  | NULL |  |  |
| vaccine_serial_no | varchar(100) | YES |  | NULL |  |  |
| eu_qr_code_image | blob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_cert_id | doctor_cert_id | no | 1 |
| PRIMARY | doctor_cert_covid19_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_cert_covid19_vaccine_id": 1,
    "doctor_cert_id": 117,
    "vaccine_date": "2021-05-25",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "B202104032",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 1,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  },
  {
    "doctor_cert_covid19_vaccine_id": 2,
    "doctor_cert_id": 117,
    "vaccine_date": "2021-06-15",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "C202104070",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 2,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  },
  {
    "doctor_cert_covid19_vaccine_id": 3,
    "doctor_cert_id": 118,
    "vaccine_date": "2021-05-25",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "B202104032",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 1,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  },
  {
    "doctor_cert_covid19_vaccine_id": 4,
    "doctor_cert_id": 118,
    "vaccine_date": "2021-06-15",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "C202104070",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 2,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  },
  {
    "doctor_cert_covid19_vaccine_id": 5,
    "doctor_cert_id": 119,
    "vaccine_date": "2021-05-25",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "B202104032",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 1,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  },
  {
    "doctor_cert_covid19_vaccine_id": 6,
    "doctor_cert_id": 119,
    "vaccine_date": "2021-06-15",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "C202104070",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 2,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  },
  {
    "doctor_cert_covid19_vaccine_id": 7,
    "doctor_cert_id": 120,
    "vaccine_date": "2021-05-25",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "B202104032",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 1,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  },
  {
    "doctor_cert_covid19_vaccine_id": 8,
    "doctor_cert_id": 120,
    "vaccine_date": "2021-06-15",
    "vaccine_name": "วัคซีน Covid-19 SINOVAC [Sinovac Life Sciences]",
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_lot_number": "C202104070",
    "vaccine_place": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "vaccine_dose_no": 2,
    "eu_qr_code": null,
    "vaccine_serial_no": null,
    "eu_qr_code_image": null
  }
]
```
